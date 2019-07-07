import * as React from "react";
import { AppLayout } from "layout";
import { HotelCollectionContainer } from "pods/hotel-collection";
import { HotelEditionContainer } from "pods/hotel-edit";

export const HotelEditPage = () => (
  <AppLayout>
    <HotelEditionContainer />
  </AppLayout>
);