// import { updateProduct } from "@/app/lib/actions";
// import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async () => {
  //   const { id } = params;
  //   const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Apple
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value={456} />
          <label>Title</label>
          <input type="text" name="title" placeholder={"apple"} />
          <label>Price</label>
          <input type="number" name="price" placeholder={1000} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={20} />
          <label>Color</label>
          <input type="text" name="color" placeholder={"color"} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={"size"} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={"best to buy"}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
