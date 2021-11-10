## Redux

![img_2.png](img_2.png)
----
**Important terms **

- Store
    - holds the global state of an app
    - ![img.png](img.png)
- Reducer
    - How the store gets updated
    - this is a function
    - takes current instance of the store and updates store.
    - think of it as event handlers.
    - ![img_1.png](img_1.png)
- Action
    - plain javascript object explained what just happened
    - THis could be simple as just an event
    - also can be called events
    - pure functions.
    - ![img_5.png](img_5.png)
      - type: is a must usually a string 
      - description: ususally data
      - example of actions with payLoad 
      ![img_6.png](img_6.png)
      - note that payload will hold the data here. 
  ### How Redux Works

![img_3.png](img_3.png)
----

## Steps in creating redux store

![img_4.png](img_4.png)


