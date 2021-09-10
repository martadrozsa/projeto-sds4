import BarChar from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import NavBar from "components/NavBar";
import Footer from "components/NavBar/Footer";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>


                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondaty"> Taxa de sucesso (%)</h5>
                        <BarChar />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondaty"> Todas vendas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>

                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
