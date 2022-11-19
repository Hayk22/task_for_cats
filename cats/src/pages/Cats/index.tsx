import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchCategories,
  fetchPosts,
  setIdForCat,
  setLimit,
} from "../../redux/action";

import { Categories, CatsType, StoreType } from "../../types";

import styles from "./catssection.module.css";

export const Cats = (): JSX.Element => {
  const dispatch = useDispatch();

  const cats = useSelector((state) => (state as StoreType).cats);
  const categories = useSelector((state) => (state as StoreType).categoria);
  const limit = useSelector((state) => (state as StoreType).limit);
  const id = useSelector((state) => (state as StoreType).id);

  useEffect(() => {
    dispatch(fetchPosts(limit, id) as never);
    dispatch(fetchCategories() as never);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(
      fetchPosts(limit, (categories?.[id] as { id: number })?.id) as never
    );
  }, [limit, id, dispatch, categories]);

  const moreCat = (): void => {
    dispatch(setLimit(+10));
  };

  return (
    <section>
      <div className={styles.selectBox}>
        <select
          name="category"
          id="category"
          className={styles.category}
          onChange={(e) => {
            const index = categories?.findIndex(
              (item: Categories) =>
                (item as { name: string })?.name === e.target.value
            );
            dispatch(setIdForCat(index));
          }}
        >
          {categories.map((_item: Categories, index: number) => (
            <option key={index} value={_item.name}>
              {_item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.cardrow}>
        {cats.map((_item: CatsType, index: number) => (
          <div key={index}>
            <Link to={_item.id}>
              <img alt="cat" className={styles.catImg} src={_item.url} />
            </Link>
          </div>
        ))}
        <div onClick={moreCat} className={styles.loadMore}>
          <span>Load More</span>
        </div>
      </div>
    </section>
  );
};
