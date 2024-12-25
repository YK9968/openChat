import { FC } from "react";
import { Message } from "../../types/messagesType";
import { Field, Form, Formik, FormikHelpers } from "formik";

interface IEditMsgModalProps {
  toggleForm: () => void;
  msg: Message;
  updateMessage: (id: string, text: string, chatId: string) => void;
}

const EditMsgModal: FC<IEditMsgModalProps> = ({
  toggleForm,
  msg,
  updateMessage,
}) => {
  const editText = (
    value: { text: string },
    actions: FormikHelpers<{ text: string }>
  ) => {
    updateMessage(msg.chatId, msg.id, value.text);
    actions.resetForm();
    toggleForm();
  };

  return (
    <Formik initialValues={{ text: msg.text }} onSubmit={editText}>
      <Form>
        <h2 className=" text-2xl pb-12">Edit message</h2>
        <div className="flex flex-col justify-center items-center">
          <Field
            as="textarea"
            className=" focus:outline-none   p-4  w-96 mb-4 rounded-2xl resize-none overflow-auto max-h-chatHeight custom-scrollbar "
            type="text"
            name="text"
          />
          <button
            className="bg-rose-500 py-3 px-10 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mt-2 w-40 "
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditMsgModal;
