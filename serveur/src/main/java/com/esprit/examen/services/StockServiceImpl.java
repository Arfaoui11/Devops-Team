package com.esprit.examen.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.esprit.examen.entities.Stock;
import com.esprit.examen.repositories.StockRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class StockServiceImpl implements IStockService {

    @Autowired
    StockRepository stockRepository;

    @Override
    public List<Stock> retrieveAllStocks() {
        log.info("In method retrieveAllStocks");
        List<Stock> stocks = stockRepository.findAll();
        for (Stock stock : stocks) {
            log.info(" Stock : {}", stock);
        }
        log.info("out of method retrieveAllStocks");
        return stocks;
    }

    @Override
    public Stock addStock(Stock s) {
        log.info("In method addStock");
        return stockRepository.save(s);
    }

    @Override
    public void deleteStock(Long stockId) {
        log.info("In method deleteStock");
        stockRepository.deleteById(stockId);
    }

    @Override
    public Stock updateStock(Stock s) {
        log.info("In method updateStock");
        return stockRepository.save(s);
    }

    @Override
    public Stock retrieveStock(Long stockId) {
        long start = System.currentTimeMillis();
        log.info("In method retrieveStock");
        Stock stock = stockRepository.findById(stockId).orElse(null);
        log.info("out of method retrieveStock");
        long elapsedTime = System.currentTimeMillis() - start;
        log.info("Method execution time: {} milliseconds.", elapsedTime);
        return stock;
    }

    @Override
    public String retrieveStatusStock() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        String msgDate = sdf.format(new Date());
        StringBuilder finalMessage = new StringBuilder();
        String newLine = System.lineSeparator();

        List<Stock> lowStocks = stockRepository.retrieveStatusStock();
        for (Stock stock : lowStocks) {
            finalMessage.append(msgDate)
                    .append(newLine)
                    .append(": le stock ")
                    .append(stock.getLibelleStock())
                    .append(" a une quantite de ")
                    .append(stock.getQte())
                    .append(" inferieure a la quantite minimale a ne pas depasser de ")
                    .append(stock.getQteMin())
                    .append(newLine);
        }

        String result = finalMessage.toString();
        if (!result.isEmpty()) {
            log.info(result);
        }
        return result;
    }

    /*
     * Spring Scheduler : Comparer QteMin toleree (a ne pas depasser) avec
     * Quantite du stock et afficher sur console la liste des produits inferieurs
     * au stock. La fct schedule doit obligatoirement etre sans parametres et
     * sans retour (void)
     */
    @Scheduled(fixedDelayString = "${stock.status.scheduler.delay.ms:60000}")
    public void retrieveStatusStockScheduler() {
        List<Stock> lowStocks = stockRepository.retrieveStatusStock();
        if (lowStocks.isEmpty()) {
            log.info("Aucun stock inferieur a la quantite minimale.");
            return;
        }

        for (Stock stock : lowStocks) {
            log.info("Stock critique : {} | qte={} | qteMin={}",
                    stock.getLibelleStock(), stock.getQte(), stock.getQteMin());
        }
    }
}
