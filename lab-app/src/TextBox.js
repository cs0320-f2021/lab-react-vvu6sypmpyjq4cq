function TextBox(props) {
    return (
      <div className="Route">
        <label>
            {props.label}
            <input type="text"
            onChange={(event) => {props.change(event.target.value)}}/>
        </label>
      </div>
    );
  }
  
  export default TextBox;