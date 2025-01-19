import { Avatar, Box, Button } from '@mui/material';
import CustomerIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import {
    ListBase,
    WithListContext,
    SimpleList,
    useTranslate,
} from 'react-admin';
import { subDays } from 'date-fns';
import CardWithIcon from './CardWithIcon';

const NewUsers = () => {
    const translate = useTranslate();

    const aMonthAgo = subDays(new Date(), 30);
    aMonthAgo.setDate(aMonthAgo.getDate() - 30);
    aMonthAgo.setHours(0);
    aMonthAgo.setMinutes(0);
    aMonthAgo.setSeconds(0);
    aMonthAgo.setMilliseconds(0);

    return (
        <ListBase
            resource="users"
            //filter={{
            //    has_ordered: true,
            //    first_seen_gte: aMonthAgo.toISOString(),
            //}}
            sort={{ field: 'name', order: 'ASC' }}
            perPage={100}
            disableSyncWithLocation
        >
            <CardWithIcon
                to="/users"
                icon={CustomerIcon}
                title={translate('pos.dashboard.new_users')}
                subtitle={
                    <WithListContext render={({ total }) => <>{total}</>} />
                }
            >
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.email}
                />
                <Box flexGrow={1}>&nbsp;</Box>
                <Button
                    sx={{ borderRadius: 0 }}
                    component={Link}
                    to="/users"
                    size="small"
                    color="primary"
                >
                    <Box p={1} sx={{ color: 'primary.main' }}>
                        {translate('pos.dashboard.all_users')}
                    </Box>
                </Button>
            </CardWithIcon>
        </ListBase>
    );
};

export default NewUsers;