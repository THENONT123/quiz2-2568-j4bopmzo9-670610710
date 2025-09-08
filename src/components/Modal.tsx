import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return {
    /* Type additional text here. */
    
  };
  return (
    <div
      className="modal fade"
      id="modalregister" //id="modalregister": ตัวระบุของ modal (ใช้กับ data-bs-target หน้า HomePage)
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register CMU Marathon 🏃‍♂️</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* First name & Last name */}
            <div className="d-flex gap-2">
              <div>
                <label className="form-label">First name</label>
                <input
                  className={"form-control" + (nameError ? " is-invalid" : "")}
                  onChange={inputFnameOnChange}
                  value={fname}
                />
                <div className="invalid-feedback">Invalid first name</div>
              </div>
            </div>


            <div className="alert alert-primary mt-3" role="alert">
              Promotion📢 Buy all items to get 20% Discount
            </div>

            {/* Total Payment */}
            <div>
              Total Payment : {computeTotalPayment().toLocaleString()} THB
              {/* Render below element conditionally when user get 20% discount */}
            </div>
          </div>
          <div className="modal-footer">
            {/* Register Button */}
            <button
              className="btn btn-success my-2"
              onClick={registerBtnOnClick}
              //You can embbed a state like below to disabled the button
              disabled={!isUserAgreed}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const total:number = 1000;
}
