import { LoadingMessage, ErrorMessage } from "./styled";

const Message = ({ status }) => (
  <>
    {
      status === "error" ?
        <ErrorMessage>
          Hmm... Coś poszło nie tak.🤔 Sprawdź, czy masz połączenie z internetem.{" "}
          Jeśli masz... to wygląda na to, że to nasza wina. Może spróbuj później!😛
        </ErrorMessage> :
        <LoadingMessage>
          Sekundka...<br />Ładuję dane z Europejskiego Banku Centralnego.😎
        </LoadingMessage>
    }
  </>
);

export default Message;