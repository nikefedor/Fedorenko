// // import React from "react"
// // import { NavLink } from "react-router-dom";
// // import c from "./Dialogs.module.css"


// const DialogsItem = (props) =>{
//     return <div className={c.dialog}>
//     <NavLink to = {"/dialogs/"+ props.id}>{props.name}</NavLink>
//    </div>
// }
// const MesaageItem =(props) =>{
//     return <div className={c.dialog}>{props.message}</div>
// }

// const Dialogs = (props) => {

//     let dialogsData = [
//         {id: 1, name: 'Dima1'},
//         {id: 2, name: 'Dima2'},
//         {id: 3, name: 'Dima3'},
//         {id: 4, name: 'Dima4'},
//         {id: 5, name: 'Dima5'}
//     ]
//     let messageData = [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'Di'},
//         {id: 3, message: 'Mi'}
        
//     ]

//     return (
//         <div className={c.dialogs}>
//             <div className={c.dialogsItems}>
//                 <DialogsItem name = {dialogsData[0].name}id={dialogsData[0].id} />
//                 <DialogsItem name = {dialogsData[1].name}id={dialogsData[1].id} />
//                 <DialogsItem name = {dialogsData[2].name}id={dialogsData[2].id} />
//                 <DialogsItem name = {dialogsData[3].name}id={dialogsData[3].id} />
//                 <DialogsItem name = {dialogsData[4].name}id={dialogsData[4].id} />
                
//             </div>
//             <div className={c.messages}>
//                 <MesaageItem message ={messageData[0].message} />
//                 <MesaageItem message ={messageData[1].message} />
//                 <MesaageItem message ={messageData[2].message} />
               
//             </div>
            
//         </div>
//     )
// }

// export default Dialogs;