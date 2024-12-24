import { FC } from "react";
import { Message } from "../../types/messagesType";
import { Field, Form, Formik, FormikHelpers } from "formik";

interface IEditMsgModalProps {
  togleForm: () => void;
  msg: Message;
  updateMessage: (id: string, text: string) => void;
}

const EditMsgModal: FC<IEditMsgModalProps> = ({
  togleForm,
  msg,
  updateMessage,
}) => {
  const editText = (
    value: { text: string },
    actions: FormikHelpers<{ text: string }>
  ) => {
    updateMessage(msg.id, value.text);
    actions.resetForm();
    togleForm();
  };

  return (
    <Formik initialValues={{ text: msg.text }} onSubmit={editText}>
      <Form>
        <Field
          className="border py-4 pl-4 w-96 mb-4 rounded-2xl "
          type="text"
          name="text"
        />

        <button
          className="bg-rose-500 py-3 px-10 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mt-2 "
          type="submit"
        >
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default EditMsgModal;
