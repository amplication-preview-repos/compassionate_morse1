import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { TraderTitle } from "../trader/TraderTitle";

export const FollowingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="trader.id" reference="Trader" label="Trader">
          <SelectInput optionText={TraderTitle} />
        </ReferenceInput>
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
