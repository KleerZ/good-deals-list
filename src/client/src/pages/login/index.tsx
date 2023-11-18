import styles from "@/styles/Login.module.scss";
import {inter} from "@/pages";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {loginUser} from "@/actions/user.actions";
import {useRouter} from "next/router";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '', server: '' });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    let formIsValid = true;

    if (formData.email === '') {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      formIsValid = false;
    }

    if (formData.password === '') {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      formIsValid = false;
    }
    if (formData.password.length < 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password lenght is less than 6' }));
      formIsValid = false;
    }

    if (formIsValid) {
      try {
        const response = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          dispatch(loginUser(data));
          await router.push('/');
        } else if (response.status === 401) {
          setErrors((prevErrors) => ({ ...prevErrors, server: 'Invalid password' }));
        }
        else if (response.status === 404) {
          setErrors((prevErrors) => ({ ...prevErrors, server: 'User not found' }));
        }
      } catch (error) {
        setErrors((prevErrors) => ({ ...prevErrors, server: 'Login failed' }));
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <main className={`center-div ${inter.className}`}>
        <div className={'modal'}>
          <h2>Login</h2>

          <input
            className={'input-text-margin'}
            type="text"
            placeholder={'Email'}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          
          <input
            className={'input-text-margin'}
            type="password"
            placeholder={'Password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

          <button type="submit" className={styles.button}>
            Login
          </button>

          {errors.server && <span style={{ color: 'red' }}>{errors.server}</span>}
        </div>
      </main>
    </form>
  );
}
