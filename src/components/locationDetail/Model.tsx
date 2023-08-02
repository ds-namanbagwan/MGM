import * as React from "react";
import Modal from "react-modal";
import { Cross } from "../../sites-global/global";
import { StaticData } from "../../sites-global/staticData";
import Holidayhours from "./Holdayhours";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#main');

function Model(props: any) {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    document.body.classList.add("overflow-hidden");
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
  }

  var day;
  return (
    <>
      {props.holidayHours.map((res: any) => {
        const d = new Date(res.date);
        day = d.getDay();
        var d1 = new Date();
        var d2 = new Date(res.date);
        d1.setHours(0);d1.setMinutes(0);d1.setSeconds(0);d1.setMilliseconds(0);
        if(d2 > d1){
          return (
            <>
              <button
                onClick={openModal}
                className="text-link"
                id="holidaybtn"
              >
                {props.name}
              </button>

              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <a
                  onClick={closeModal}
                  type="button"
                  id="closeButton"
                  className="closeButton bg-closeIcon bg-no-repeat bg-center w-7 h-7 bg-[length:48px]"
                >
                  <div dangerouslySetInnerHTML={{ __html: Cross }} />
                </a>

                {props.holidayHours ? (
                  <>
                    <div className="font-bold text-lg  mb-4">
                      {StaticData.Holdiay}
                    </div>
                    <div className="pop-up-holyhrs heading">
                      <div>Date</div>
                      <div>Holiday</div>
                      <div>Day</div>
                      <div> Opening Hours</div>
                    </div>
                    <Holidayhours
                      hours={props.holidayHours}
                      c_specific_day={props.c_specific_day}
                    />
                  </>
                ) : (
                  ""
                )}
              </Modal>
            </>
          );
        }
      })}
    </>
  );
}

export default Model;
