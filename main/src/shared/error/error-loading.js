import React from 'react';
import {Message} from "primereact/message";

const ErrorLoading = () => {
  return (
    <div>
        <Message severity="error" text="Error loading component" />
    </div>
  );
};

export default ErrorLoading;
