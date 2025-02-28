class DoorStateMachine:
    def __init__(self):
        # Start with the door closed.
        self.state = 'closed'

    def on_event(self, event):
        # Define transitions based on the current state and event.
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
        # Return the new state after processing the event.
        return self.state

# Example usage:
if __name__ == '__main__':
    door = DoorStateMachine()
    print("Initial state:", door.state)
    
    # Transition from closed to open.
    print("After 'open' event:", door.on_event('open'))
    
    # Transition from open to closed.
    print("After 'close' event:", door.on_event('close'))
    
    # Transition from closed to locked.
    print("After 'lock' event:", door.on_event('lock'))
    
    # Transition from locked to closed.
    print("After 'unlock' event:", door.on_event('unlock'))
