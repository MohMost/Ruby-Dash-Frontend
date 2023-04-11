import classes from "./BlogList.module.css";

export default function BlogList() {
  return (
    <div className={classes.container}>
      <section>
        <div className={classes.recent}>
          <div className={classes.recent_blogs}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99 0.343048C4.47 0.343048 0 4.82305 0 10.343C0 15.863 4.47 20.343 9.99 20.343C15.52 20.343 20 15.863 20 10.343C20 4.82305 15.52 0.343048 9.99 0.343048ZM14.23 16.343L10 13.793L5.77 16.343L6.89 11.533L3.16 8.30305L8.08 7.88305L10 3.34305L11.92 7.87305L16.84 8.29305L13.11 11.523L14.23 16.343Z"
                fill="#D83731"
              ></path>
            </svg>
            <h2 className={classes.recent_h2}>Recent blogs</h2>
          </div>
          <div className={classes.lines}>
            <svg
              className={classes.line}
              width="31"
              height="5"
              viewBox="0 0 31 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="2.5"
                x2="31"
                y2="2.5"
                stroke="#42240C"
                stroke-width="5"
              ></line>
            </svg>
            <svg
              className={classes.line}
              width="31"
              height="5"
              viewBox="0 0 31 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="2.5"
                x2="31"
                y2="2.5"
                stroke="#42240C"
                stroke-opacity="0.7"
                stroke-width="5"
              ></line>
            </svg>
            <svg
              className={classes.line}
              width="31"
              height="5"
              viewBox="0 0 31 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="2.5"
                x2="31"
                y2="2.5"
                stroke="#42240C"
                stroke-opacity="0.5"
                stroke-width="5"
              ></line>
            </svg>
            <svg
              className={classes.line}
              width="31"
              height="5"
              viewBox="0 0 31 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="2.5"
                x2="31"
                y2="2.5"
                stroke="#42240C"
                stroke-opacity="0.3"
                stroke-width="5"
              ></line>
            </svg>
          </div>
        </div>
        <div className={classes.blog_list}>
          <article className={classes.article}>
            <img
              className={classes.blog_banner}
              src="blogBanner.jpg"
              alt="banner"
            />
            <ul className={classes.blog_category}>
              <li>
                <a className={classes.blog_category_a} href="">
                  Health
                </a>
              </li>
            </ul>
            <h3 className={classes.blog_title}>
              <a className={classes.blog_title_a} href="#">
                5 Tips for a Better Night's Sleep
              </a>
            </h3>
            <p className={classes.content}>
              If you struggle with getting a good night's sleep, check out our
              post for 5 easy tips to help you sleep better and wake up feeling
              refreshed
            </p>
            <div className={classes.blog_footer}>
              <div className={classes.user_info}>
                <a href="">
                  <img
                    className={classes.profile_picture}
                    src="picture.png"
                    alt="profile picture"
                  />
                </a>
                <div className={classes.name_time}>
                  <a href="#" className={classes.user_name}>
                    John Doe
                  </a>
                  <p className={classes.created_at}>1h ago</p>
                </div>
              </div>
              <a href="#" className={classes.read_more}>
                <p className={classes.read_more_p}>READ MORE</p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.89375 12.6437L5 13.75L11.25 7.5L5 1.25L3.89375 2.35625L9.0375 7.5L3.89375 12.6437Z"
                    fill="#FFD9D9"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
