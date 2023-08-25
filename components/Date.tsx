import { format, parseISO } from 'date-fns';
import nl from 'date-fns/locale/nl';

type DateProps = {
    dateString: string;
};

export default function Date({ dateString }: DateProps) {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>
            {format(date, 'd LLLL yyyy', {
                locale: nl,
            })}
        </time>
    );
}
