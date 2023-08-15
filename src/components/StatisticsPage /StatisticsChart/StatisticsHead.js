import { useTranslation } from 'react-i18next';
import { enUS as en, uk as ua, pl, es } from 'date-fns/locale';
import { StyledDatePicker } from 'components/SharedComponents/DatePicker/DatePicker';
import { TbPointFilled } from 'react-icons/tb';
import {
  DataContainer,
  PrevDayButton,
  NextDayButton,
  LegendList,
  ChartHead,
  ButtDiv,
  LeftArrow,
  RightArrow,
} from './StatisticsHead.styled';

export const StatisticsHead = ({
  selectedDate,
  setSelectedDate,
  handlePreviousDay,
  handleNextDay,
}) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const locale = { en, ua, pl, es };

  return (
    <ChartHead>
      <DataContainer>
        <StyledDatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="d MMMM yyyy "
          element="button"
          locale={locale[currentLanguage]}
        />
        <ButtDiv>
          <PrevDayButton onClick={handlePreviousDay}>
            <LeftArrow />
          </PrevDayButton>
          <NextDayButton onClick={handleNextDay}>
            <RightArrow />
          </NextDayButton>
        </ButtDiv>
      </DataContainer>
      <LegendList>
        <li>
          <TbPointFilled color="#FFD2DD" size={20} />
          <span>{t('By Day')}</span>
        </li>
        <li>
          <TbPointFilled color="#3E85F3" size={20} />
          <span>{t('By Month')}</span>
        </li>
      </LegendList>
    </ChartHead>
  );
};
