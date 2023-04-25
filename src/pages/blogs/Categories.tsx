import { useState } from "react";
import classes from "../../assets/styles/Categories.module.css";
import Modal from "../../components/Modal";
export default function Categories() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(e: any) {
    setModalIsVisible(true);
  }
  function hideModalHandler(e: any) {
    setModalIsVisible(false);
  }
  return (
    <section className={classes.section_category}>
      <div onClick={showModalHandler} className={classes.category_button}>
        <h2 className={classes.categories_h2}>Categories</h2>
        <svg
          width="15"
          height="auto"
          viewBox="0 0 34 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.1794 0.686581C31.5522 0.30259 32.1611 0.280065 32.5612 0.635473L33.2187 1.21959C33.6445 1.59789 33.6688 2.25494 33.2721 2.66367L17.7176 18.6893C17.3248 19.094 16.6752 19.094 16.2824 18.6893L0.727909 2.66367C0.331197 2.25494 0.355503 1.59789 0.781329 1.21959L1.43883 0.635473C1.83889 0.280065 2.44784 0.302589 2.82055 0.686579L16.2824 14.5559C16.6752 14.9605 17.3248 14.9605 17.7176 14.5559L31.1794 0.686581Z"
            fill="#42240C"
          />
        </svg>
      </div>
      <div className={classes.categories}>
        <h2 className={classes.categories_h2}>Categories :</h2>
        <ul className={classes.category_list}>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              All
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Technology
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Health
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Travel
            </a>
          </li>

          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Fashion and Beauty
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Finance
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Arts and Culture
            </a>
          </li>
        </ul>
      </div>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <div className={classes.categories_2}>
            <ul className={classes.category_list_2}>
              <li className={classes.category_2}>
                <a className={classes.category_a_2} href="#">
                  All
                </a>
              </li>
              <li className={classes.category_2}>
                <a className={classes.category_a_2} href="#">
                  Technology
                </a>
              </li>
              <li className={classes.category_2}>
                <a className={classes.category_a_2} href="#">
                  Health
                </a>
              </li>
              <li className={classes.category_2}>
                <a className={classes.category_a_2} href="#">
                  Travel
                </a>
              </li>

              <li className={classes.category_2}>
                <a className={classes.category_a_2} href="#">
                  Fashion and Beauty
                </a>
              </li>
              <li className={classes.category_2}>
                <a className={classes.category_a_2} href="#">
                  Finance
                </a>
              </li>
              <li className={classes.category_2}>
                <a className={classes.category_a_2} href="#">
                  Arts and Culture
                </a>
              </li>
            </ul>
          </div>
        </Modal>
      )}
      <div className={classes.line}></div>
    </section>
  );
}
