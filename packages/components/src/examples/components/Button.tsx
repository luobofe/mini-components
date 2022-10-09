import { h } from "preact";
import { Button } from "@src/components";

export default function () {
  return (
    <fieldset>
      <legend>Button</legend>
      <Button block color="red" size="40px">
        primary
      </Button>
      <Button block color="orange" size="40px" variant="outline">
        outline
      </Button>
      <Button block color="black" size="40px" variant="text">
        text
      </Button>
      <Button block color="black" size="40px" disabled variant="outline">
        disabled
      </Button>
    </fieldset>
  );
}
