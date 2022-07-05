import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "../redux/slices/counterSlice"

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }