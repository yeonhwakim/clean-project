import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { formikContract } from "@/shared/lib/zod";
import { checklistContracts, checklistTypes } from "@/entities/checklist";

export function CreateChecklistForm() {
  return (
    <Formik
      enableReinitialize
      initialValues={initialArticle}
      validate={formikContract(checklistContracts.CreateChecklistSchema)}
      onSubmit={async () => console.log("?????????")}
    >
      <Form>
        <fieldset>
          <fieldset>
            <Field name="name" type="text" placeholder="Checklist" />
            <ErrorMessage name="name" />
          </fieldset>
          <SubmitButton />
        </fieldset>
      </Form>
    </Formik>
  );
}

const initialArticle: checklistTypes.CreateChecklist = {
  name: "",
};

function SubmitButton() {
  const { isValidating, isValid } = useFormikContext();

  return (
    <button
      className="btn btn-lg pull-xs-right btn-primary"
      type="submit"
      disabled={!isValid || isValidating}
    >
      Add Checklist
    </button>
  );
}
