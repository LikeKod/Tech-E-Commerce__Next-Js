export function shipping({ }) {
    return (
        <>
            <div className="container">
            <div className="steps">
              <div>Step 1 Address</div>
              <div>Step 2 Shipping</div>
              <div>Step 3 Payment</div>
            </div>
            <div className="block_shipment-method">
              <div className="text_shipment-method">Select Address</div>
              <div className="Radio-Button">
        <div className="container_Radio-Button">
        <label>
          <input type="radio" name="myRadio" value="Thornridge" />
          <div className="text_radio">2118 Thornridge</div>
          <div className="text_radio-description">
          <p>HOME</p>
          </div>
        </label>
        </div>
        <div className="container_Radio-Button"> 
        <label>
          <input className="TRTR" type="radio" name="myRadio" value="Headoffice" />
          <div className="text_radio">Headoffice</div>
          <div className="text_radio-description">
          <div>OFFICE</div>
          </div>
        </label>
        </div>
        </div>
        <div className="btn__shipping">
        <button className="btn__black-small">
                        <p>Back</p>
                    </button>
                    <button className="button btn__black">
                      <p>Next</p>
                      </button>
                      </div>
            </div>
            </div>

        </>
    )
}