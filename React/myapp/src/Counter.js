import React, { useState } from "react";

// show count to show counter, increment and decrement button with reset. not below zero

function AssignmentComponent() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="p-6">
        <h3 className="text-4xl">Counter</h3>
        <button
          className="border mb-6 p-3 bg-slate-100 shadow-md"
          onClick={() => setShow((current) => !current)}
        >
          Show Counter
        </button>
        {show && (
          <div>
            <h3 className="text-3xl">Count : {counter}</h3>
            <div>
              <button
                onClick={() => setCounter((v) => v + 1)}
                className="border p-3 bg-slate-100 shadow-md"
              >
                Increment
              </button>
              <button
                onClick={() => setCounter((v) => (v === 0 ? 0 : v - 1))}
                className="border p-3 bg-slate-100 shadow-md"
              >
                Decrement
              </button>
              <button
                onClick={() => setCounter(() => 0)}
                className="border p-3 bg-slate-100 shadow-md"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignmentComponent;