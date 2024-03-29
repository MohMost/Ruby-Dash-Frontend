import classes from "../assets/styles/ProfileMenu.module.css";

export default function ProfileMenu({ onLogout, onUserName }: any) {
  return (
    <div className={classes.container}>
      <div className={classes.username_container}>
        <a href="" className={classes.username}>
          Logged in as <span>{onUserName}</span>
        </a>
      </div>
      <div className={classes.new_posts_container}>
        <a href="" className={classes.new_posts}>
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff8f8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <a href="">New blog</a>
        </a>
      </div>

      <ul>
        <li>
          <a href="">
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className={classes.span}>Profile</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              fill="#42240c"
              width="20"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <g>
                    <path d="M26,19.4V14a2,2,0,0,0-4,0v5.4A5.1,5.1,0,0,0,19,24a5,5,0,0,0,10,0A5.1,5.1,0,0,0,26,19.4Z" />
                    <path d="M24,2A22.1,22.1,0,0,0,2,24,21.6,21.6,0,0,0,8.3,39.4a1.9,1.9,0,0,0,2.8,0h0l3-3a2,2,0,0,0-2.8-2.8L9.8,35.1A19.2,19.2,0,0,1,6.1,26H8a2,2,0,0,0,0-4H6.1a18.5,18.5,0,0,1,3.8-9.2h0l1.4,1.3a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L12.8,9.9h0A18.5,18.5,0,0,1,22,6.1h0V8a2,2,0,0,0,4,0V6.1h0a18.5,18.5,0,0,1,9.2,3.8h0l-1.3,1.4a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0l1.4-1.3h0A18.5,18.5,0,0,1,41.9,22H40a2,2,0,0,0,0,4h1.9a19.2,19.2,0,0,1-3.7,9.1l-1.5-1.5a2,2,0,1,0-2.8,2.8L37,39.5a2,2,0,0,0,2.7-.1A21.6,21.6,0,0,0,46,24,22.1,22.1,0,0,0,24,2Z" />
                  </g>
                </g>
              </g>
            </svg>
            <span className={classes.span}>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className={classes.span}>Settings</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <span className={classes.span} onClick={onLogout}>
              Log out
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
