# chessjure

Welcome to Chessjure

Chessjure is a work in progress chess application I've been writing to learn Clojure. 

It is written using Clojurescript using the quiescent clojurescript react wrapper library. 

The application currently features 
* Move validation
* Common chess notation parsing, including infering where start positions are. For instance, moves like Nxe5 should work if only one knight can access e5. If two knights can access e5, such that the command is ambiguous, you specify that like Nd2e5 or Nd2xe5
* En-Passant validation
* Castling validation
* A simple web based UI

The following still need fixing:

* Check analysis
* Checkmate analysis
* Castling
* Promotion
* A basic AI component

To run chessjure, you'll need leiningen. 

The command to start the server is

lein figwheel dev

Then open up the following link in your browser:

http://localhost:3447
