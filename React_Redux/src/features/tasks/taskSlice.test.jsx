// store.subscribe(() => {
//     console.log("Updated state:", store.getState());
// });

import { store } from "../../store_RTK";
import { addTask, deleteTask } from "./taskSlice";

// dispatch and action to store the task
console.log(store.getState());
console.log(store.dispatch(addTask("Buy Mango")));
console.log(store.dispatch(addTask("Buy drugs")));
console.log(store.dispatch(deleteTask(0)));
console.log(store.getState());