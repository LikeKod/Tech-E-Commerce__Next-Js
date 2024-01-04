

import MainLayout from "../layouts/MainLayout"
import './Shipping.css'


export default function Shipping({ }) {


    return (
        <MainLayout>

            <div className="container">
            <div className="steps">
              <div>Step 1 Address</div>
              <div>Step 2 Shipping</div>
              <div>Step 3 Payment</div>
            </div>
            <div className="block_shipment-method">
              <div className="text_shipment-method">Shipment Method</div>
              <div className="Radio-Button">
        <div className="container_Radio-Button">
        <label>
          <input type="radio" name="myRadio" value="Free" />
          <div className="text_radio">Free</div>
          <div className="text_radio-description">
          <p>Regulary shipment</p>
          <p>17 Oct, 2023</p>
          </div>
        </label>
        </div>
        <div className="container_Radio-Button"> 
        <label>
          <input type="radio" name="myRadio" value="$8.50" />
          <div className="text_radio">$8.50</div>
          <div className="text_radio-description">
          <div>Get your delivery as soon as possible</div>
          <div>1 Oct, 2023</div>
          </div>
        </label>
        </div>
        <div className="container_Radio-Button">
        <label>
          <input type="radio" name="myRadio" value="Schedule" />
          <div  className="text_radio">Schedule</div>
          <div className="text_radio-description">
          <div>Pick a date when you want to get your delivery</div>
          <div>Select Date</div>
          </div>
        </label>
        </div>
        </div>
        <div className="btn__shipping">
        <button className="btn__black-small">
                        <p>Back</p>
                    </button>
                    <button class="button btn__black">
                      <p>Next</p>
                      </button>
                      </div>
            </div>
            </div>

        </MainLayout>
    )
}