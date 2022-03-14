import React, { useState, useContext, useEffect } from "react";
import HedarNavContainer, { DivCenter, H1 } from "./loder.styles";
import {useAdminContext} from "../../contexts/AdminContext";
export default function Loder() {
  const [loading, setloading] = useState(true); // note: to open loading comp when the function start
 const context = useAdminContext();

  // const API = async () => {
  //   setloading(true);

  //   try {
  //     const response = context.login();
  //     // console.log(tours);

  //     setloading(false); // note: to close the loading comp when the API data be ready
  //     // settours(true)
  //   } catch (error) {
  //     setloading(false); // note: to close the loading comp if we have error
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   API();
  // }, []);

  // if (loading) {
  //   // to render loading if the 'loading' true and to be unreadable if it false
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   );
  // }

  // return (
  //   <main>
  //     <Tours />
  //   </main>
  // );

  return (
    <HedarNavContainer>
      {/* <Tours /> */}
      <DivCenter></DivCenter>
      <H1>جاري التحميل</H1>
    </HedarNavContainer>
  );
}

// this code should be show after login and should be in app.jsx or home parent component but I am wating when that be done

// function App() {}

// Another way to type the code ----------------------------------------------------

// export class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: '',
//       load: 'true'
//     };
//   }

//   ApiData = async () => {

//     try {
//       const url = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=%20tGJePhm23bhndzCWrOsp0F9aMS8YAyht'
//       const dat = await axios.get(url)
//       // console.log(dat.data);
//       this.setState({ data: dat.data })

//       this.setState({load:'false'})

//     } catch (error) {
//       console.log(error);
//       this.setState({load:'false'})
//     }
//   }

//   componentDidMount = () => {
//     this.ApiData();
//   }

//   render() {
//     if (this.state.load === 'true') {
//       return (
//         <Loading />
//       )
//     }
//     // console.log(this.state.data);

//     return (
//       <main>
//         <Tours ameen={this.state.data}/>
//       </main>
//     );
//   }
// }

// export default App
