import { StartInvesting } from '../src/components/start-investing';
import { Layout } from '../src/components/ui/layout';
import { ViewInvestments } from '../src/components/view-investments';

const CreateDepositPage = () => {
  return (
    <Layout>
      <StartInvesting />
      <ViewInvestments />
    </Layout>
  );
};

export default CreateDepositPage;
