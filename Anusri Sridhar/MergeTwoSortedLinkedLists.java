import java.util.Scanner;

public class MergeTwoSortedLinkedLists {

    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    static Node merge(Node head1, Node head2) {
        Node dummy = new Node(0);
        Node tail = dummy;

        while (head1 != null && head2 != null) {
            if (head1.data <= head2.data) {
                tail.next = head1;
                head1 = head1.next;
            } else {
                tail.next = head2;
                head2 = head2.next;
            }
            tail = tail.next;
        }

        if (head1 != null) {
            tail.next = head1;
        } else {
            tail.next = head2;
        }

        return dummy.next;
    }

    static void display(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Node head1 = null, tail1 = null;
        Node head2 = null, tail2 = null;

        System.out.print("Enter number of elements in first list: ");
        int n1 = sc.nextInt();

        System.out.println("Enter sorted elements:");
        for (int i = 0; i < n1; i++) {
            Node newNode = new Node(sc.nextInt());

            if (head1 == null) {
                head1 = newNode;
                tail1 = newNode;
            } else {
                tail1.next = newNode;
                tail1 = newNode;
            }
        }

        System.out.print("Enter number of elements in second list: ");
        int n2 = sc.nextInt();

        System.out.println("Enter sorted elements:");
        for (int i = 0; i < n2; i++) {
            Node newNode = new Node(sc.nextInt());

            if (head2 == null) {
                head2 = newNode;
                tail2 = newNode;
            } else {
                tail2.next = newNode;
                tail2 = newNode;
            }
        }

        Node mergedHead = merge(head1, head2);

        System.out.println("Merged list:");
        display(mergedHead);

        sc.close();
    }
}