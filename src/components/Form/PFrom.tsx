
import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";


interface IFormConfig{
  resolver?:any;
  defaultValues?:any

}

interface IProps extends IFormConfig{
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const PForm = ({ children, onSubmit,resolver,defaultValues }: IProps) => {
 const formConfig  : IFormConfig = {}


if (!!resolver) {
  formConfig['resolver']=resolver
 
}
if (!!defaultValues) {
  formConfig['defaultValues']=defaultValues
 
}
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PForm;