import * as yup from "yup";

// Şifre için regex kurallarınızı bir dizi yerine direkt string olarak yazabilirsiniz.
// Regex kontrolünü doğrudan .matches() içinde uygulayacağız.
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Email girmek zorunludur."),
  age: yup
    .number()
    .typeError("Lütfen sayı formatında giriniz.") // Eğer input type="text" ise hata mesajı
    .positive("Lütfen pozitif bir yaş giriniz.")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz.")
    .required("Yaş girmek zorunludur."),
  password: yup
    .string()
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/,
      "Şifre en az 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter içermelidir."
    )
    .required("Şifre girmek zorunludur."),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor.")
    .required("Şifre tekrarı zorunludur."),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır")
    .required("Kullanıcı adı zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
