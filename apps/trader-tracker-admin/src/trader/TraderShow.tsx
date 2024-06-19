import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRADER_TITLE_FIELD } from "./TraderTitle";

export const TraderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="score" source="score" />
        <TextField label="traderId" source="traderId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Following"
          target="traderId"
          label="Followings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Trader"
              source="trader.id"
              reference="Trader"
            >
              <TextField source={TRADER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userId" source="userId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Position"
          target="traderId"
          label="Positions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="currentPrice" source="currentPrice" />
            <TextField label="entryPrice" source="entryPrice" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Trader"
              source="trader.id"
              reference="Trader"
            >
              <TextField source={TRADER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
