import { useAccordion } from "@components/Accordion/Accordion"
import { HeaderTrigger, TopLine } from "@components/Accordion/StyledAccordion"
import Icon from "@components/Icon/Icon"

const Trigger = () => {
  const { visible, toggle } = useAccordion()

  return (
    <HeaderTrigger onClick={toggle}>
      <TopLine />
      {visible ? "접기" : "자세히 보기"}
      {!visible ? (
        <Icon
          icon="DownArrowGray"
          size={25}
        />
      ) : (
        <Icon
          icon="UpArrow"
          size={24}
        />
      )}
    </HeaderTrigger>
  )
}

export default Trigger
