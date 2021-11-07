import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { accordion } from "../data";

export default function Example() {
  return (
    <Accordion allowZeroExpanded>
      {accordion.map(({ title, id, description }) => {
        return (
          <AccordionItem key={id}>
            <AccordionItemHeading>
              <AccordionItemButton>{title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{description}</p>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
