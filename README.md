
##  Welcome to Redux
**with Redux Toolkit and Redux Thunk**

**NPM install**

**NPM run dev**

The basic idea behind this app is to simulate a somewhat complex component tree structure and how we would handle the state in them

![image](https://user-images.githubusercontent.com/55181354/125398697-ee327c00-e3af-11eb-9e93-0b96d566edce.png)

There are different components creating a CAR, which can

* **start** = a synchronous action is dispatched from screen to start the car, this is used in the cylinder to get them moving and turn the indicator on (green light)
* **stop** = a synchronous action is dispatched from screen to stop the car, this is used in the cylinder to stop them and turn the indicator off (red light)
* **go** = a synchronous action is dispatched to drive but it also lowers the oil level. After some time, the car runs out of oil and which causes an issue with oil pump which  dispatches an action to the screen and shows notification, it also stops the cylinder
* **fix oil pump** = an asynchronous action is dispatched, which takes 5 seconds to complete and then again starts the car and fills the oil
