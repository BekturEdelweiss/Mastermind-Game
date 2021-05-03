import swal from "sweetalert";

export const callSwal = (title, text, icon, button, dangerMode) => {
  swal({
    title,
    text,
    icon,
    button,
    dangerMode,
  });
};
