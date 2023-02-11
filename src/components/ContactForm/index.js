export { default } from './ContactForm';
// import { nanoid } from 'nanoid';

// export default class C extends Component {
//   loginInputId = nanoid();

//   render() {
//     return (
//       <form>
//         <label htmlFor={this.loginInputId}>Login</label>
//         <input type="text" name="login" id={this.loginInputId} />
//       </form>
//     );
//   }
// }

// const Gender = {
//   MALE: 'male',
//   FEMALE: 'female',
// };
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
//   agreed: false,
//   gender: null,
//   age: '',
// };

// export default class C extends Component {
//   state = { ...INITIAL_STATE };

//   // Відповідає за оновлення стану
//   handleChange = evt => {
//     const { name, value, type, checked } = evt.target;
//     this.setState({ [name]: type === 'checkbox' ? checked : value });
//     console.log(this.state);
//   };

//   // Викликається під час відправлення форми
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { login, email, password, agreed, gender, age } = this.state;
//     console.log(
//       `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, Gender: ${gender}, Age: ${age}`
//     );
//     console.log(`Signed up as: ${this.state.login}`);

//     // Проп, який передається формі для виклику під час сабміту
//     this.props.onSubmit({ ...this.state });
//     console.log(this);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { login, email, password, agreed, gender, age } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             value={login}
//             name="login"
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Agree to terms
//           <input
//             type="checkbox"
//             checked={agreed}
//             name="agreed"
//             onChange={this.handleChange}
//           />
//         </label>
//         <section>
//           <h2>Choose your gender</h2>
//           <label>
//             Male
//             <input
//               type="radio"
//               checked={gender === Gender.MALE}
//               name="gender"
//               value={Gender.MALE}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Female
//             <input
//               type="radio"
//               checked={gender === Gender.FEMALE}
//               name="gender"
//               value={Gender.FEMALE}
//               onChange={this.handleChange}
//             />
//           </label>
//         </section>
//         <label>
//           Choose your age
//           <select name="age" value={age} onChange={this.handleChange}>
//             <option value="" disabled>
//               ...
//             </option>
//             <option value="18-25">18-25</option>
//             <option value="26-35">26-35</option>
//             <option value="36+">36+</option>
//           </select>
//         </label>

//         <button type="submit" disabled={!agreed}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }
