import React from "react";
import { useFormik } from "formik";
import "../Css/GenelCss.css";
import { basicSchema } from "../Schemas/İndex";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { errors, values, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        email: "",
        age: 0,
        password: "",
        confirmpassword: "",
      },
      validationSchema: basicSchema,
    });
  return (
    <form onSubmit={handleSubmit} className="FormSubmit">
      <div>
        <label className="LabelCss">Email</label>
        <input
          type="text"
          value={values.email}
          id="email"
          onChange={handleChange}
          placeholder="Email Giriniz."
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="InputDiv">
        <label className="LabelCss">Yaş</label>
        <input
          type="text"
          value={values.age}
          id="age"
          onChange={handleChange}
          placeholder="Yaşınızı Giriniz."
          className={errors.email ? "input-error" : ""}
        />

        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="InputDiv">
        <label className="LabelCss">Şife Giriniz</label>
        <input
          type="password"
          value={values.password}
          id="password"
          onChange={handleChange}
          placeholder="Şifrenizi Giriniz."
          className={errors.email ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="InputDiv">
        <label className="LabelCss">Şife Tekrar</label>
        <input
          type="password"
          value={values.confirmpassword}
          id="confirmpassword"
          onChange={handleChange}
          placeholder="Şifreyi Tekrar Giriniz."
          className={errors.email ? "input-error" : ""}
        />
        {errors.confirmpassword && (
          <p className="error">{errors.confirmpassword}</p>
        )}
      </div>
      <div className="InputDiv">
        <button disabled={isSubmitting} className="btnCss" type="submit">
          KAYDET
        </button>
        <Link className="formLink" to="/portal">
          Portala Git
        </Link>
      </div>
    </form>
  );
}

export default GeneralForm;
