class Storage {
    int value;
    boolean available = false;
    synchronized void produce(int value) throws InterruptedException {
        while (available) {
            wait();
        }
        this.value = value;
        available = true;
        System.out.println("Produced: " + value);
        notify();
    }
    synchronized void consume() throws InterruptedException {
        while (!available) {
            wait();
        }
        System.out.println("Consumed: " + value);
        available = false;
        notify();
    }
}

class Producer extends Thread {
    Storage storage;
    Producer(Storage storage) {
        this.storage = storage;
    }
    public void run() {
        for (int i = 1; i <= 5; i++) {
            try {
                storage.produce(i);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}

class Consumer extends Thread {
    Storage storage;
    Consumer(Storage storage) {
        this.storage = storage;
    }
    public void run() {
        for (int i = 1; i <= 5; i++) {
            try {
                storage.consume();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
public class ProducerConsumer {
    public static void main(String[] args) {
        Storage storage = new Storage();
        Producer producer = new Producer(storage);
        Consumer consumer = new Consumer(storage);
        producer.start();
        consumer.start();
    }
}