import Link from "next/link";
import styles from '@/styles/Header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {loginUser, logoutUser} from "@/actions/user.actions";
import {useRouter} from "next/router";

export const HeaderComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const currentUser = useSelector((state: any) => state.user);
  const handleLogout = async () => {
    dispatch(logoutUser());
    await router.push('/login')
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link href={"/"}>Main</Link></li>
          <li><Link href={"/profile"}>Profile</Link></li>
        </ul>
        
        <ul>
          {
            !currentUser.user ? (
              <>
                <li><Link href={"/login"}>Login</Link></li>
                <li><Link href={"/register"}>Registration</Link></li>
              </>
            ) : <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  )
}