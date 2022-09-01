// import { useState } from 'react';
// function Upload() {
//     const [fileData, setFileData] = useState();
//     const fileChangeHandler = (e: any) => {
//         setFileData(e.target.files[0]);
//     };
//     const onSubmitHandler = (e: any) => {
//         console.log('file data ====>', fileData);
//         e.preventDefault();
//         const data = new FormData();
//         // temp userID until current user is in React state
//         const userID = 1;
//         // @ts-ignore
//         data.append('image', fileData); // image key to use in Postman
//         const server = 'http://localhost:3000';
//         // Send reqest to backend - Single upload
//         fetch(`${server}/api/post/${userID}`, {
//             method: 'POST',
//             body: data,
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//             },
//         })
//             .then((result) => {
//                 console.log('File sent successfully', result);
//             })
//             .catch((err) => {
//                 console.log('Something Went Wrong', err);
//             });
//     };
//     return (
//         <div className="App">
//             <h1>Uploading Files using Multer</h1>
//             <form onSubmit={onSubmitHandler}>
//                 <input type="file" onChange={fileChangeHandler} />
//                 <br />
//                 <br />
//                 <button type="submit">Send to backend</button>
//             </form>
//             <br />
//             {/* <img src="http://localhost:3000/images/test.png" alt="S3 file" width="800" /> */}
//         </div>
//     );
// }
// export default Upload;
export default {};
