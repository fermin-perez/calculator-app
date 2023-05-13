import { useState } from "react";
import "./App.css";

export const App = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleBackspace = () => {
    setValue(value.slice(0, -1));
  };

  const handleEqual = () => {
    setValue(eval(value));
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleBackspace} />
            <input type="button" value="." onClick={handleSubmit} />
            <input type="button" value="/" onClick={handleSubmit} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleSubmit} />
            <input type="button" value="8" onClick={handleSubmit} />
            <input type="button" value="9" onClick={handleSubmit} />
            <input type="button" value="*" onClick={handleSubmit} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleSubmit} />
            <input type="button" value="5" onClick={handleSubmit} />
            <input type="button" value="6" onClick={handleSubmit} />
            <input type="button" value="+" onClick={handleSubmit} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleSubmit} />
            <input type="button" value="2" onClick={handleSubmit} />
            <input type="button" value="3" onClick={handleSubmit} />
            <input type="button" value="-" onClick={handleSubmit} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleSubmit} />
            <input type="button" value="0" onClick={handleSubmit} />
            <input
              type="button"
              value="="
              className="equal"
              onClick={handleEqual}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
