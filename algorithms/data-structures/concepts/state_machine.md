# Understanding State Machines

State machines are a powerful tool for modeling the behavior of systems by breaking down their operation into discrete states and transitions. This document explains the core concepts of state machines, provides an example implementation in Python, and discusses the benefits of using them.

## Core Concepts

### States
States represent distinct conditions or modes in which a system can exist. For instance, a door might have the states `closed`, `open`, and `locked`.

### Transitions
Transitions define the movement from one state to another. They occur when specific events trigger a change. For example, a door might transition from `closed` to `open` when it receives an `open` event.

### Events/Inputs
Events or inputs are the triggers that cause state transitions. These can be user actions, sensor signals, or any external factors influencing the system.

### Actions
Actions are the operations that are executed during state transitions or while in a certain state. Depending on the design, actions may be tied directly to transitions (as in Mealy machines) or states (as in Moore machines).

## Example: Door State Machine in Python

Below is an example implementation of a simple state machine for a door with three states: `closed`, `open`, and `locked`.

```python
class DoorStateMachine:
    def __init__(self):
        # Initialize with the door in the 'closed' state.
        self.state = 'closed'

    def on_event(self, event):
        # Transition logic based on the current state and received event.
        if self.state == 'closed':
            if event == 'open':
                self.state = 'open'
            elif event == 'lock':
                self.state = 'locked'
        elif self.state == 'open':
            if event == 'close':
                self.state = 'closed'
        elif self.state == 'locked':
            if event == 'unlock':
                self.state = 'closed'
        return self.state

# Example usage:
if __name__ == '__main__':
    door = DoorStateMachine()
    print("Initial state:", door.state)  # closed
    
    # Transition from closed to open.
    print("After 'open' event:", door.on_event('open'))  # open
    
    # Transition from open to closed.
    print("After 'close' event:", door.on_event('close'))  # closed
    
    # Transition from closed to locked.
    print("After 'lock' event:", door.on_event('lock'))  # locked
    
    # Transition from locked to closed.
    print("After 'unlock' event:", door.on_event('unlock'))  # closed
