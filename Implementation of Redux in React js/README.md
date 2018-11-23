# Implementation of Redux in React js

# Getting Started
This Proof of Concept is implemented for the demonstration of Redux in a react application. 

# Contents

* What is Redux?
* Pillars of Redux
    * Reducer
    * Store
    * Subscription
    * Dispacher for action
* Installation
* Authors
# What is Redux?
Redux makes it easy to manage the state of your application. It helps you manage the data you display and how you respond to user actions.
# Pillars of Redux

### Reducer
To create a Redux store, first we need to create a Reducer. A Reducer is a function which takes state and action as the input parameters and returns the updated state. Based on action types we can determine what tasks to be performed on the state before returning. Action Types are plain tokens which should be short as well as define the purpose.

### Store

Store can be created using createStore function provided by redux. CreateStore Function from redux needs rootReducer as an argument to execute.

### Subscription

The components who wants to get notified when data is changed can subscribe to the store. They can subscribe to complete store data or a slice of data. Redux will notify the subscribed component with updated data in the form of props. 

### Dispacher for action

Dispacher if a function which calls the Reducer to perform some task. This task is denoted by Action Types. If required, data can also be sent to the reducer in the form of payload.

# Installation

Install the dependencies and start the server.

```sh
$ npm install --save redux
$ npm install --save react-redux
$ npm start
```

### Authors
@scalexlabs