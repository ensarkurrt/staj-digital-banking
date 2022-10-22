import FormInput from "@/components/FormInput/FormInput";
import styled from "@emotion/styled";

import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Container, Grid, Link, Link as MuiLink, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

// 👇 Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

// 👇 Styled Material UI Link Component
export const OauthMuiLink = styled(MuiLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f7;
  border-radius: 1;
  padding: 0.6rem 0;
  column-gap: 1rem;
  text-decoration: none;
  color: #393e45;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    box-shadow: 0 1px 13px 0 rgb(0 0 0 / 15%);
  }
`;

type Inputs = {
  name: string;
  email: string;
  phone: string;
  tckn: string;
  password: string;
};

const RegisterPage: FC = () => {
  const methods = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Container maxWidth={false} sx={{ height: "100vh", backgroundColor: { xs: "#fff", md: "#f4f4f4" } }}>
      <Grid container justifyContent="center" alignItems="center" sx={{ width: "100%", height: "100%" }}>
        <Grid item sx={{ maxWidth: "70rem", width: "100%", backgroundColor: "#fff" }}>
          <FormProvider {...methods}>
            {/* <form onSubmit={methods.handleSubmit(onSubmit)}> */}
            <Grid
              container
              sx={{
                boxShadow: { sm: "0 0 5px #ddd" },
                py: "6rem",
                px: "1rem",
              }}
            >
              <Grid
                item
                container
                justifyContent="center"
                rowSpacing={5}
                sx={{
                  maxWidth: { sm: "45rem" },
                  marginInline: "auto",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ paddingRight: { sm: "3rem" } }}
                    onSubmit={methods.handleSubmit(onSubmit)}
                  >
                    <Typography variant="h6" component="h1" sx={{ textAlign: "center", mb: "1.5rem" }}>
                      Kayıt Ol
                    </Typography>

                    <FormInput type={"text"} label={"Adınız"} name={"name"} minLength={3} required />
                    <FormInput type={"email"} label={"E-Posta"} name={"email"} minLength={5} required />
                    <FormInput
                      type={"phone"}
                      label={"Telefon Numarası"}
                      name={"phone"}
                      minLength={11}
                      maxLength={11}
                      required
                    />

                    <FormInput
                      type={"text"}
                      label={"Kimlik Numaranız"}
                      name={"tckn"}
                      minLength={11}
                      maxLength={11}
                      required
                    />

                    <FormInput type={"password"} label={"Şifreniz"} name={"password"} minLength={6} required />

                    <LoadingButton
                      loading={methods.formState.isSubmitting}
                      type="submit"
                      /* disabled={!methods.formState.isDirty || !methods.formState.isValid} */
                      variant="contained"
                      sx={{
                        py: "0.8rem",
                        mt: 2,
                        width: "80%",
                        marginInline: "auto",
                      }}
                    >
                      Kayıt Ol
                    </LoadingButton>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Stack sx={{ mt: "3rem", textAlign: "center" }}>
                  <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>Hesabınız var mı? Giriş Yap!</Typography>
                </Stack>
              </Grid>
            </Grid>
            {/* </form> */}
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterPage;