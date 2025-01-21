import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "../ui/select";
import { Textarea } from "../ui/textarea";

// Define input types for the form controls
const types = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea"
}

const Form = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

  // Function to render inputs based on component type
  function renderInputsByComponentType(getControlItem) {
    let element = null;

    // Get the value for the current form control
    const value = formData[getControlItem.name] || "";

    // Render input elements based on component type
    switch (getControlItem.componentType) {

      // Input field
      case types.INPUT:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={event => setFormData({
              ...formData,
              [getControlItem.name]: event.target.value
            })}
          />
        );
        break;

      // Select dropdown
      case types.SELECT:
        element = (
          <Select
            onValueChange={(value) => setFormData({
              ...formData,
              [getControlItem.name]: value
            })}
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {
                getControlItem.options && getControlItem.options.length > 0
                  ? getControlItem.options.map(optionItem => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                  : null
              }
            </SelectContent>
          </Select>
        );
        break;

      // Textarea for multiline input
      case types.TEXTAREA:
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={event => setFormData({
              ...formData,
              [getControlItem.name]: event.target.value
            })}
          />
        );
        break;

      // Default case: Fallback to an Input field
      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={event => setFormData({
              ...formData,
              [getControlItem.name]: event.target.value
            })}
          />
        );
        break;
    }

    // Return the rendered element
    return element;
  }

  // Render the form
  return (
    <form onSubmit={onSubmit}>
      {/* Form fields */}
      <div className="flex flex-col gap-3">
        {
          formControls.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
              <Label className="mb-1 rounded-xl">
                {controlItem.label}
              </Label>
              {renderInputsByComponentType(controlItem)}
            </div>
          ))
        }
      </div>
      {/* Submit button */}
      <Button
        className="mt-2 w-full text-white bg-black hover:text-white hover:bg-black rounded-xl"
        type="submit"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default Form;
