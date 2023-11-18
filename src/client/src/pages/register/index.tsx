import styles from "@/styles/Login.module.scss";
import {inter} from "@/pages";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useState} from "react";
import {loginUser} from "@/actions/user.actions";

export default function Register() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({name: '', email: '', password: ''});
  const [errors, setErrors] = useState({name: '', email: '', password: '', server: ''});

  const handleInputChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: ''});
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    let formIsValid = true;

    if (formData.name === '') {
      setErrors((prevErrors) => ({...prevErrors, name: 'Name is required'}));
      formIsValid = false;
    }

    if (formData.email === '') {
      setErrors((prevErrors) => ({...prevErrors, email: 'Email is required'}));
      formIsValid = false;
    }

    if (formData.password === '') {
      setErrors((prevErrors) => ({...prevErrors, password: 'Password is required'}));
      formIsValid = false;
    }
    if (formData.password.length < 6) {
      setErrors((prevErrors) => ({...prevErrors, password: 'Password lenght is less than 6'}));
      formIsValid = false;
    }

    if (formIsValid) {
      try {
        const response = await fetch('http://localhost:4000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: formData.name, email: formData.email, password: formData.password}),
        });

        if (response.ok) {
          const data = await response.json();
          dispatch(loginUser(data))
          await router.push('/');
        } else if (response.status === 400) {
          setErrors((prevErrors) => ({...prevErrors, server: 'User already exists'}));
        }
      } catch (error) {
        setErrors((prevErrors) => ({...prevErrors, server: 'Registration failed'}));
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <main className={`center-div ${inter.className}`}>
        <div className={'modal'}>
          <h2>Registration</h2>

          <input
            className={'input-text-margin'}
            type="text"
            placeholder={'Name'}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

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
            Register
          </button>

          {errors.server && <span style={{ color: 'red' }}>{errors.server}</span>}
        </div>
      </main>
    </form>
  )
}