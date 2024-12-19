import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { TraderTitle } from "../trader/TraderTitle";

export const FollowingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="trader.id" reference="Trader" label="Trader">
          <SelectInput optionText={TraderTitle} />
        </ReferenceInput>
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
